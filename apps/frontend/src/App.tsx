import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import NavbarOffLogin from "./components/NavbarLogout/NavbarOffLogin";
import Footer from "./components/footer";
import { MisReservas } from "./routers/auth/pages/misreservas";
import Contact from "./routers/auth/pages/Contact";
import Destination from "./routers/auth/pages/Destination";
import Hotels from "./routers/auth/pages/Hotels";
import Register from "./routers/auth/register/Register";

import { useEffect } from "react";
import { Route } from "wouter";
import { AuthContext } from "./context/Auth";
import Login from "./routers/auth/login/Login";
import { Error404 } from "./routers/auth/pages/404";
import Reservar from "./routers/auth/pages/detalles.reservacion";
import UsuarioPerfil from "./routers/auth/pages/perfil";
import { Post } from "./routers/auth/pages/post";
import { Home } from "./routers/home";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFzdGFyZG9zc3MiLCJhIjoiY2xscjFiZXI2MGJ1bDNjdWd3djVxbnl5eiJ9.SsXPnXm1Na-BkCSHLmNKMQ";

function App() {
  const { setUser, user } = AuthContext();

  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <>
      <span className="container min-h-screen flex flex-col mx-auto">
        <NavbarOffLogin />
        {/* Si existe ingresa a estas rutas */}
        {user ? (
          <>
            <Route path="/" component={Home} />
            <Route path="/destination" component={Destination} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/contact" component={Contact} />
            <Route path="/perfil" component={UsuarioPerfil} />
            <Route path="/404" component={Error404} />
            <Route path="/reservacion/:id">
              {(params) => <Reservar id={params.id} />}
            </Route>
            <Route path="/postvivienda" component={Post} />
            <Route path="/misreservaciones" component={MisReservas} />
          </>
        ) : (
          <>
            <Route path="/" component={Home} />
            <Route path="/404" component={Error404} />
            <Route path="/reservacion/:id">
              {(params) => <Reservar id={params.id} />}
            </Route>
            <Route path="/destination" component={Destination} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        )}
        {/* Si no existe ingresa a estas */}

        <Footer />
      </span>
    </>
  );
}

export default App;
