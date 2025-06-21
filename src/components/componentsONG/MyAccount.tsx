"use client";
import { useOngAuth } from '@/context/OngAuthContext';
import React, { useState } from 'react';
import ProfileOng from './ProfileOng';
import NewCaseOng from './NewCaseOng';
import AdoptionsOng from './AdoptionsOng';
import PublishedOng from './PublishedOng';
import DonationsOng from './DonationsOng';
import NewPet from './NewPet';  // 1. Importar el componente

type ViewType = "profil" | "donations" | "newCase" | "myCases" | "adoptions" | "newPet";  // 2. Agregar opción "newPet"

const MyAccount = () => {
  useOngAuth();

  const [selectedView, setSelectedView] = useState<ViewType>("profil");

  return (
    <div className="flex min-h-screen -mt-16">
      <aside className="w-64 p-6 space-y-4 text-white bg-pink-600">
        <h2 className="mb-6 text-2xl font-bold">Mi cuenta</h2>

        {[
          { label: "Mi Perfil", view: "profil" },
          { label: "Historial de Donaciones", view: "donations" },
          { label: "Publicar Nuevo Caso", view: "newCase" },
          { label: "Mis Casos Publicados", view: "myCases" },
          { label: "Solicitudes de Adopción", view: "adoptions" },
          { label: "Crear Nueva Mascota", view: "newPet" },  // 3. Nueva opción en menú
        ].map((item) => (
          <button
            key={item.view}
            className={`block w-full text-left py-2 px-3 rounded hover:bg-pink-700 ${
              selectedView === item.view ? "bg-pink-700" : ""
            }`}
            onClick={() => setSelectedView(item.view as ViewType)}
          >
            {item.label}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-10 bg-pink-50">
        {selectedView === "profil" && <ProfileOng />}
        {selectedView === "donations" && <DonationsOng />}
        {selectedView === "newCase" && <NewCaseOng />}
        {selectedView === "myCases" && <PublishedOng />}
        {selectedView === "adoptions" && <AdoptionsOng />}
        {selectedView === "newPet" && <NewPet />} {/* 4. Renderizar NewPet */}
      </main>
    </div>
  );
};

export default MyAccount;




// "use client";
// import { useOngAuth } from '@/context/OngAuthContext';
// import React, { useState } from 'react';
// import ProfileOng from './ProfileOng';
// import NewCaseOng from './NewCaseOng';
// import AdoptionsOng from './AdoptionsOng';
// import PublishedOng from './PublishedOng';
// import DonationsOng from './DonationsOng';

// type ViewType = "profil" | "donations" | "newCase" | "myCases" | "adoptions";

// const MyAccount = () => {
//   useOngAuth();

//   const [selectedView, setSelectedView] = useState<ViewType>("profil");


//   return (
//     <div className="flex min-h-screen -mt-16">
//       <aside className="w-64 p-6 space-y-4 text-white bg-pink-600">
//         <h2 className="mb-6 text-2xl font-bold">Mi cuenta</h2>

//         {[
//           { label: "Mi Perfil", view: "profil" },
//           { label: "Historial de Donaciones", view: "donations" },
//           { label: "Publicar Nuevo Caso", view: "newCase" },
//           { label: "Mis Casos Publicados", view: "myCases" },
//           { label: "Solicitudes de Adopción", view: "adoptions" },
//         ].map((item) => (
//           <button
//             key={item.view}
//             className={`block w-full text-left py-2 px-3 rounded hover:bg-pink-700 ${
//               selectedView === item.view ? "bg-pink-700" : ""
//             }`}
//             onClick={() => setSelectedView(item.view as ViewType)}
//           >
//             {item.label}
//           </button>
//         ))}
//       </aside>

//       <main className="flex-1 p-10 bg-pink-50">
//         {selectedView === "profil" && <ProfileOng />}
//         {selectedView === "donations" && <DonationsOng />}
//         {selectedView === "newCase" && <NewCaseOng />}
//         {selectedView === "myCases" && <PublishedOng />}
//         {selectedView === "adoptions" && <AdoptionsOng />}
//       </main>
//     </div>
//   );
// };

// export default MyAccount;

