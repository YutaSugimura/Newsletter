import { InputEmail } from '../../atoms/input/email';
import { SubmitButton } from '../../atoms/Button/submit';

type Props = {};

export const SubscribeForm: React.VFC<Props> = ({}) => {
  return (
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <InputEmail />
      <SubmitButton />
    </div>
  );
};
