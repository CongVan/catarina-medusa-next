import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";
import { Navigation } from "./Navigation";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
export const Header = () => {
  return (
    <div className="bg-white relative">
      <div className=" flex items-center justify-center py-5 container">
        <div>
          {/* @ts-expect-error Async Server Component */}
          <Navigation />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-body font-extrabold text-4xl bg-clip-text bg-gradient-to-tr from-brand-600 via-brand-400 to-brand-600 text-transparent">
          Catarina
        </div>
        <div className="flex items-center space-x-1 ml-auto">
          <ButtonIcon variant="subtle">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon variant="subtle">
            <HeartIcon className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon variant="subtle">
            <ShoppingCartIcon className="w-5 h-5" />
          </ButtonIcon>
          <Button variant="filled" className="!ml-5">Đăng nhập</Button>
        </div>
      </div>
    </div>
  );
};
