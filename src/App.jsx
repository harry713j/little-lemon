import "./App.css";
import {
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
} from "./components";
import CustomDatePicker from "./components/CustomDatePicker";
import environment_variables from "./environment_import/environmentVariables";

function App() {
  // console.log(environment_variables.appwriteCollectionTestimonyId);
  return (
    <div className="bg-creamWhite h-screen">
      <div className="flex flex-col gap-4 mt-5 mb-10">
        <Header />
        {/* <Input type="file" label="profile" />
        <Input type="date" label="date" />
        <Input type="time" label="time" /> */}
        {/* <CustomDatePicker />
        <ItemCard /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
