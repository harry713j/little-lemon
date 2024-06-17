import "./App.css";
import {
  AllMenu,
  Button,
  Cart,
  CheckoutItemCard,
  ChefProfile,
  Footer,
  Header,
  Input,
  ItemCard,
  ItemCarousel,
  LogButton,
  NumberInput,
  Select,
  TestimonialCard,
  TestimonialCarousel,
  TextArea,
  CustomDatePicker,
  CustomTimePicker,
  SignupForm,
  RadioButtonGroup,
  LoginForm,
  CheckoutItems,
  ReservationForm,
  CheckoutForm,
} from "./components";

function App() {
  return (
    <div className="bg-creamWhite">
      <div className="flex flex-col gap-4 pt-5">
        <Header />

        <div className="mx-8 flex flex-col gap-5">
          {/* <CustomDatePicker />
          <CustomTimePicker /> */}
          {/* <Input type="password" label="Input" />
          <Input type="file" />
          <RadioButtonGroup /> */}
          {/* <ReservationForm /> */}
          <CheckoutForm />
        </div>
        {/* <CheckoutItems />
         */}
        <AllMenu />
        <div
          className="my-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm flex justify-center 
        items-center px-2 py-6 space-y-6 flex-col"
        >
          <SignupForm />
          <LoginForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
