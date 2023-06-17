const express = require("express")
const { Post, Get, GetID, Update, Delete, like, GetPostBasedOnUserFollowing, IMG, Resize , AddComment } = require("../controllers/c_post")
const router = express.Router()


router.post("/" ,IMG ,Resize , Post )
router.get("/" , Get )
router.get("/:id" , GetID )
router.put("/:id" ,IMG ,Resize, Update )
router.delete("/:id" , Delete )
router.put("/:id/comment" , AddComment )
router.put("/:id/like" , like )

router.get("/:id/GetPostBasedOnUserFollowing" , GetPostBasedOnUserFollowing )

module.exports = router