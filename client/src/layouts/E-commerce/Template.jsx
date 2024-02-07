import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Breadcrumb from "../../Components/UI/Breadcrumb/Breadcrumb.jsx";

import Home from "../../Pages/Home/Home.jsx";
import Shop from "../../Pages/Shop/Shop.jsx";
import Recipe from "../../Pages/Recipes/Recipe.jsx";

// Erreur 404
import ErrorPage from "../../Pages/Error/ErrorPage.jsx";

// Nos catégories de produits
import FruitPreparation from "../../Pages/Our_product_categories/Fruit_preparations/FruitPreparation.jsx";
import FruitPuree from "../../Pages/Our_product_categories/Fruit_purees/FruitPuree.jsx";
import DriedFruit from "../../Pages/Our_product_categories/Dried_fruit_purees/DriedFruit.jsx";
import Smoothie from "../../Pages/Our_product_categories/Smoothies/Smoothie.jsx";

// Nos marques
import Brand from "../../Pages/Our_Brands/Brand.jsx";

// Dulce de Fruit
import Story from "../../Pages/Dulce_de_Fruit/Our_story/Story.jsx";
import Commitment from "../../Pages/Dulce_de_Fruit/Our_commitment/Commitment.jsx";

// Service Client
import ShipInfo from "../../Pages/Customer_Service/Shipping_information/ShipInfo.jsx";
import Faq from "../../Pages/Customer_Service/FAQ/Faq.jsx";
import Contact from "../../Pages/Customer_Service/Contact_us/Contact.jsx";
import Supplier from "../../Pages/Customer_Service/Supplier_area/Supplier.jsx";
import Sitemap from "../../Pages/Customer_Service/Sitemap/Sitemap.jsx";

// Informations Légales
  import LegalMentions from "../../Pages/Legal_Information/Legal_mentions/Index.jsx";
  import Cgv from "../../Pages/Legal_Information/CGV/Cgv.jsx";
  import Cgu from "../../Pages/Legal_Information/CGU/Cgu.jsx";
  import DataProtection from "../../Pages/Legal_Information/Data_protection/Index.jsx";
  import CookiesPolicy from "../../Pages/Legal_Information/Cookies_policy/Index.jsx";
  import SingleProduct from "../../Pages/Shop/SingleProduct.jsx";

function Template() {
  const location = useLocation();

  return (
    <>
      <Header />

      {location.pathname === "/" ? null : <Breadcrumb />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notre-boutique" element={<Shop />} />
        <Route path="/notre-boutique/:id" element={<SingleProduct />} />
        <Route path="/nos-recettes" element={<Recipe />} />

        {/* Route rubrique Nos catégories de produits */}

        <Route
          path="/notre-boutique/preparations-de-fruits"
          element={<FruitPreparation />}
        />
        <Route
          path="/notre-boutique/purees-de-fruits"
          element={<FruitPuree />}
        />
        <Route
          path="/notre-boutique/purees-de-fruits-secs"
          element={<DriedFruit />}
        />
        <Route path="/notre-boutique/smoothies" element={<Smoothie />} />

        {/* Route rubrique Marques distribuées */}

        <Route path="/nos-marques-partenaires" element={<Brand />} />

        {/* Route rubrique Dulce de Fruit */}

        <Route path="/dulce-de-fruit/notre-histoire" element={<Story />} />
        <Route
          path="/dulce-de-fruit/nos-engagements"
          element={<Commitment />}
        />

        {/* Route rubrique Service client */}

        <Route
          path="/service-client/informations-de-livraison"
          element={<ShipInfo />}
        />
        <Route path="/service-client/faq" element={<Faq />} />
        <Route path="/service-client/nous-contacter" element={<Contact />} />
        <Route
          path="/service-client/espace-fournisseur"
          element={<Supplier />}
        />
        <Route path="/service-client/plan-du-site" element={<Sitemap />} />
        {/* Route rubrique Informations légales */}

        <Route
          path="/informations-legales/mentions-legales"
          element={<LegalMentions />}
        />
        <Route path="/informations-legales/cgv" element={<Cgv />} />
        <Route path="/informations-legales/cgu" element={<Cgu />} />
        <Route
          path="/informations-legales/protection-des-donnees"
          element={<DataProtection />}
        />
        <Route
          path="/informations-legales/politique-sur-les-cookies"
          element={<CookiesPolicy />}
        />

        {/*Route erreur 404 */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Template;
