import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

type Props = {
  enabled?: boolean;
  onClick: () => void;
  className?: string;
};

export const NextButton: React.FC<Props> = (props) => {
  const { enabled, onClick } = props;

  return (
    <ButtonIcon
      className={twMerge("rounded-full", props.className)}
      variant="light"
      onClick={onClick}
      disabled={!enabled}
    >
      <ArrowLongRightIcon className="h-6 w-6" />
    </ButtonIcon>
  );
};
export const PrevButton: React.FC<Props> = (props) => {
  const { enabled, onClick } = props;

  return (
    <ButtonIcon
      className={twMerge("!rounded-full", props.className)}
      variant="light"
      onClick={onClick}
      disabled={!enabled}
    >
      <ArrowLongLeftIcon className="h-6 w-6" />
    </ButtonIcon>
  );
};
