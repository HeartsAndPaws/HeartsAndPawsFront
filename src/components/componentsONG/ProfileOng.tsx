"use client";
import React from "react";
import { useOngAuth } from "@/context/OngAuthContext";

const ProfileOng = () => {
  const { ong } = useOngAuth();

  if (!ong) {
    return (
      <div className="text-center text-gray-500">
        No hay datos de la ONG cargados.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Perfil de la ONG</h2>

      <div className="space-y-4 text-lg">
        <p><span className="font-semibold">Nombre:</span> {ong.nombre}</p>
        <p><span className="font-semibold">Descripción:</span> {ong.descripcion}</p>
        <p><span className="font-semibold">Teléfono:</span> {ong.telefono}</p>
        <p><span className="font-semibold">Dirección:</span> {ong.direccion}</p>
        <p><span className="font-semibold">Ciudad:</span> {ong.ciudad}</p>
        <p><span className="font-semibold">País:</span> {ong.pais}</p>
      </div>

      {ong.imagenPerfil && (
        <div className="mt-6 text-center">
          <img
            src={ong.imagenPerfil}
            alt={`Foto de perfil de ${ong.nombre}`}
            className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-pink-500 shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileOng;




// "use client";
// import React from "react";
// import { useOngAuth } from "@/context/OngAuthContext";

// const ProfileOng = () => {
//   const { ong } = useOngAuth();

//   if (!ong) return <p>No hay datos de la ONG cargados.</p>;

//   return (
//     <div>
//       <h2>Perfil de la ONG</h2>
//       <p><strong>Nombre:</strong> {ong.nombre}</p>
//       <p><strong>Descripción:</strong> {ong.descripcion}</p>
//       <p><strong>Teléfono:</strong> {ong.telefono}</p>
//       <p><strong>Dirección:</strong> {ong.direccion}</p>
//       <p><strong>Ciudad:</strong> {ong.ciudad}</p>
//       <p><strong>País:</strong> {ong.pais}</p>
//       {ong.imagenPerfil && (
//         <img
//           src={ong.imagenPerfil}
//           alt={`Foto de perfil de ${ong.nombre}`}
//           style={{ width: "200px", borderRadius: "8px", marginTop: "1rem" }}
//         />
//       )}
//     </div>
//   );
// };

// export default ProfileOng;







// "use client";
// import React from "react";
// import { useOngAuth } from "@/context/OngAuthContext";

//  export const ProfileOng = () => {
//   const { ong: user } = useOngAuth();

//   if (!user) {
//     return <p className="text-black">Cargando datos del usuario...</p>;
//   }

//   return (
//     <section>
//       <h1 className="mb-2 text-3xl font-bold text-pink-700">
//         ¡Hola, {user.name}! 👋
//       </h1>
//       <p className="mb-6 text-gray-700">
//         Bienvenida/o a tu perfil. Aquí podés ver tus datos registrados.
//       </p>

//       <div className="max-w-lg p-6 space-y-4 bg-white rounded shadow">
//         <div>
//           <strong className="block text-pink-600">Nombre:</strong>
//           <span>{user.name}</span>
//         </div>
//         <div>
//           <strong className="block text-pink-600">Email:</strong>
//           <span>{user.email}</span>
//         </div>
//         {user.direccion && (
//           <div>
//             <strong className="block text-pink-600">Dirección:</strong>
//             <span>{user.direccion}</span>
//           </div>
//         )}
//         {user.telefono && (
//           <div>
//             <strong className="block text-pink-600">Teléfono:</strong>
//             <span>{user.telefono}</span>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProfileOng;
