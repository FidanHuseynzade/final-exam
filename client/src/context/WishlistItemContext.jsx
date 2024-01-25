import { createContext, useEffect, useState } from "react";

export const WishlistItemContext = createContext("")

const WishlistItemContextProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('like')) ? JSON.parse(localStorage.getItem('like')) : [])
    const likeItem = (item) => {
        const currentData = wishlist.find(x => x._id == item._id)
        setWishlist(currentData)
    }
    const deleteItem = (item) => {
        const deleteData = wishlist.filter(x => x._id != item._id)
        setWishlist(deleteData)
    }
    useEffect(() => {
        localStorage.setItem("like", JSON.stringify(wishlist))
    }, [wishlist])

    return (
        <WishlistItemContext.Provider value={{ likeItem, deleteItem, wishlist, setWishlist }}>
            {children}
        </WishlistItemContext.Provider>
    )

}

export default WishlistItemContextProvider