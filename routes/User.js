const express = require("express")
const {  GET_ID, PUT, DELETE, GET, FOLLOW, UNFOLLOW, Seggestion,GETFollowing } = require("../controllers/c_user")
const router = express.Router()
const {protect} =require("../middleware/Authroizeation")

router.get("/"             , GET)
router.get("/:id"          , GET_ID)
router.get("/:userId/following"          , GETFollowing)
router.put("/:id"          , PUT)
router.put("/:id/follow"   , FOLLOW)
router.put("/:id/unfollow" , UNFOLLOW)
router.get("/:id/suggestion" , Seggestion)
router.delete("/:id"       , DELETE)




module.exports = router