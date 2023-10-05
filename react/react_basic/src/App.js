import { ThemeProvider, LanguageProvider } from "./1004_Context/store/user-setting-context";
import { ThemeSelector, LanguageSelector } from "./1004_Context/ContextAPIPrac1";
import { CartProvider } from "./1004_Context/store/shopping-cart-context";
import ProductList from "./1004_Context/ProductList";
import Cart from "./1004_Context/Cart";
import ShoppingCart from "./1004_Context/ContextAPIPrac2";

function App() {
  return (
    <>
      {/* <ThemeProvider>
        <ThemeSelector />
      </ThemeProvider>
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider> */}
      <ShoppingCart />
    </>
  );
}

export default App;
