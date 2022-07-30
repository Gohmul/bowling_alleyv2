const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.get("/party", controllers.getAllPartys);
router.post("/party", controllers.postNewParty);
router.get("/party/:id", controllers.getSelectParty);
router.put("/party/:id", controllers.updateParty);
router.delete("/party/:id", controllers.deleteParty);

router.get("/proshop", controllers.getAllShops);
router.post("/proshop", controllers.postNewShop);
router.put("/proshop/:id", controllers.updateShop);
router.delete("/proshop/:id", controllers.deleteShop);
router.get("/proshop/:id", controllers.getSelectParty);

module.exports = router;
