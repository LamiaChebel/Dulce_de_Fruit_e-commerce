import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import Home from "../../Pages/Home/Home.jsx";
import Shop from "../../Pages/Shop/Shop.jsx";
import Recipe from "../../Pages/Recipes/Recipe.jsx";

// Erreur 404
import ErrorPage from "../../Pages/Error/ErrorPage.jsx";

// Nos catégories de produits
import FruitPreparation from "../../Pages/Our product categories/Fruit preparations/FruitPreparation.jsx";
import FruitPuree from "../../Pages/Our product categories/Fruit purees/FruitPuree.jsx";
import DriedFruit from "../../Pages/Our product categories/Dried fruit purees/DriedFruit.jsx";
import Smoothie from "../../Pages/Our product categories/Smoothies/Smoothie.jsx";

// Nos marques
import Brand from "../../Pages/Our Brands/Brand.jsx";

// Dulce de Fruit
import Story from "../../Pages/Dulce de Fruit/Our story/Story.jsx";
import Commitment from "../../Pages/Dulce de Fruit/Our commitment/Commitment.jsx";

// Service Client
import ShipInfo from "../../Pages/Customer Service/Shipping information/ShipInfo.jsx";
import Faq from "../../Pages/Customer Service/FAQ/Faq.jsx";
import Contact from "../../Pages/Customer Service/Contact us/Contact.jsx";
import Supplier from "../../Pages/Customer Service/Supplier area/Supplier.jsx";
import Sitemap from "../../Pages/Customer Service/Sitemap/Sitemap.jsx";

// Informations Légales
import LegalMentions from "../../Pages/Legal Information/Legal mentions/Index.jsx";
import Cgv from "../../Pages/Legal Information/CGV/Cgv.jsx";
import Cgu from "../../Pages/Legal Information/CGU/Cgu.jsx";
import DataProtection from "../../Pages/Legal Information/Data protection/Index.jsx";
import CookiesPolicy from "../../Pages/Legal Information/Cookies policy/Index.jsx";

function Template() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notre-boutique" element={<Shop />} />
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
