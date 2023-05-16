import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";
import { Navigation } from "./Navigation";
import { SidebarMenu } from "./SidebarMenu";
import { MedusaClient } from "@/utils/medusa";
export const Header = async () => {
  const data = await MedusaClient.productCategories.list({
    parent_category_id: "null",
  });

  return (
    <div className="bg-white relative">
      <div className=" flex items-center py-2 lg:py-5 container">
        <SidebarMenu categories={data.product_categories} />
        <div className="hidden lg:block">
          <Navigation categories={data.product_categories} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-money font-extrabold text-2xl lg:text-4xl bg-clip-text bg-gradient-to-tr from-brand-600 via-brand-400 to-brand-600 text-transparent">
          Catarina
        </div>
        <div className=" items-center space-x-1 ml-auto  hidden lg:flex">
          <ButtonIcon variant="subtle">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon variant="subtle">
            <HeartIcon className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon variant="subtle">
            <ShoppingCartIcon className="w-5 h-5" />
          </ButtonIcon>

          <Button variant="filled" className="!ml-5">
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};
