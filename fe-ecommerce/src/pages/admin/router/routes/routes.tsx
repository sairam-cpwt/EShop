import AdminRoutes from "./adminRoutes";
import PublicRoutes from "./publicRoutes";
import SellerRoutes from "./sellerRoutes";

export const AllRoutes = [...AdminRoutes, ...SellerRoutes, ...PublicRoutes];
