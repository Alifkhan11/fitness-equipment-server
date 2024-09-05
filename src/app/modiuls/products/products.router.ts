import e from "express";
import { ProductsController } from "./products.controller";
import validateRequest from "../../middlewire/validateRequest";
import { ProductsValidation } from "./products.validation";
// import auth from "../../middlewire/auth";
// import { USER_ROLE } from "../users/user.constant";

const router = e.Router();

router.get("/", ProductsController.getAllProducts);

router.get("/catagore", ProductsController.getProductsCatagore);

// router.get("/catagore/:natagoryname", ProductsController.getProductsCatagore);

router.get(
  "/addtocard",
  //   auth(USER_ROLE.user),
  ProductsController.getAllAddToCard,
);
router.delete(
  "/addtocard/:id",
  //   auth(USER_ROLE.user),
  ProductsController.removeAddToCard,
);
router.get("/:id", ProductsController.getSingleProducts);

router.post(
  "/addtocard",
  //   auth(USER_ROLE.user, USER_ROLE.seller),
  validateRequest(ProductsValidation.adddToCardCreateValidationSchema),
  ProductsController.createAddToCard,
);

export const ProductRouter = router;
