import Button from "../../ui/Button";
import { UseCheckout } from "./UseCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = UseCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
