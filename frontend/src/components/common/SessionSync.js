import { useContext, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useCart } from "react-use-cart";
import { WishlistContext } from "@context/WishlistContext";
import CustomerServices from "@services/CustomerServices";

/**
 * SessionSync - This component sits inside CartProvider + WishlistProvider.
 * It listens for login/logout events and saves/restores user-specific
 * cart and wishlist data from Database.
 */
const SessionSync = () => {
    const { data: session, status } = useSession();
    const { items, setItems, emptyCart } = useCart();
    const { wishlistItems, loadWishlist, clearWishlist } = useContext(WishlistContext);

    const prevStatus = useRef(status);
    const prevUserId = useRef(null);
    const [isRestoring, setIsRestoring] = useState(false);
    const [isRestored, setIsRestored] = useState(false);

    // Maintain refs to get latest values in async functions
    const itemsRef = useRef(items);
    useEffect(() => { itemsRef.current = items; }, [items]);
    const wishRef = useRef(wishlistItems);
    useEffect(() => { wishRef.current = wishlistItems; }, [wishlistItems]);

    // Handles Restoration
    useEffect(() => {
        if (status === "authenticated" && session?.user?.id) {
            const userId = session.user.id;

            // Trigger restoration only on login or brand new session
            if (prevStatus.current !== "authenticated" || !isRestored || prevUserId.current !== userId) {
                prevUserId.current = userId;

                const startRestoration = async () => {
                    setIsRestoring(true);

                    try {
                        let finalCart = [...itemsRef.current];
                        let finalWishlist = [...wishRef.current];

                        // 1. Prioritize Session Data (Immediate results)
                        let dbCart = session.user.cart || [];
                        let dbWishlist = session.user.wishlist || [];

                        // 2. Fallback to API if session data is empty (just in case)
                        if (dbCart.length === 0 || dbWishlist.length === 0) {
                            try {
                                const [cartRes, wishRes] = await Promise.all([
                                    CustomerServices.getCart(userId),
                                    CustomerServices.getWishlist(userId)
                                ]);
                                if (dbCart.length === 0) dbCart = cartRes?.cart || [];
                                if (dbWishlist.length === 0) dbWishlist = wishRes?.wishlist || [];
                            } catch (err) {
                                console.error("Error fetching cart/wishlist from API:", err);
                            }
                        }

                        // 3. Merge Cart Logic
                        // We use the DB cart as the base, then append unique items from guest session
                        const mergedCart = [...dbCart];
                        itemsRef.current.forEach(guestItem => {
                            const exists = dbCart.some(dbItem => (dbItem.id || dbItem._id) === (guestItem.id || guestItem._id));
                            if (!exists) mergedCart.push(guestItem);
                        });
                        finalCart = mergedCart;

                        // 4. Merge Wishlist Logic
                        const mergedWish = [...dbWishlist];
                        wishRef.current.forEach(guestItem => {
                            const exists = dbWishlist.some(dbItem => (dbItem._id || dbItem.id) === (guestItem._id || guestItem.id));
                            if (!exists) mergedWish.push(guestItem);
                        });
                        finalWishlist = mergedWish;

                        // 5. Update State (Synchronous-like updates)
                        if (finalCart.length > 0) {
                            setItems(finalCart);
                        }
                        if (finalWishlist.length > 0) {
                            loadWishlist(finalWishlist);
                        }

                    } catch (e) {
                        console.error("SessionSync restoration error:", e);
                    } finally {
                        setIsRestoring(false);
                        setIsRestored(true);
                    }
                };

                startRestoration();
            }
        } else if (status === "unauthenticated" && prevStatus.current === "authenticated") {
            setIsRestored(false);
            setIsRestoring(false);
            prevUserId.current = null;
            
            // Clear local state on logout for privacy.
            // This ensures the next user doesn't see the previous user's cart.
            emptyCart();
            if (typeof clearWishlist === 'function') clearWishlist();
        }

        prevStatus.current = status;
    }, [status, session?.user?.id]);

    // Handles Synchronization
    useEffect(() => {
        // Only sync if we are authenticated AND restoration has finished
        if (status === "authenticated" && !isRestoring && isRestored && session?.user?.id) {
            const userId = session.user.id;

            const syncData = async () => {
                try {
                    // Sync both to DB
                    await Promise.all([
                        CustomerServices.saveCart(userId, { cart: items }),
                        CustomerServices.saveWishlist(userId, { wishlist: wishlistItems })
                    ]);
                    // console.log("Cart/Wishlist synced to DB");
                } catch (error) {
                    console.error("Failed to sync cart/wishlist:", error);
                }
            };

            const timeout = setTimeout(syncData, 2000); // 2s debounce
            return () => clearTimeout(timeout);
        }
    }, [items, wishlistItems, status, isRestored, isRestoring, session?.user?.id]);

    return null;
};

export default SessionSync;


