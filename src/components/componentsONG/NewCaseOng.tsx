"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useOngAuth } from "@/context/OngAuthContext";
import toast from "react-hot-toast";
import CaseForm from "./CaseForm";

interface FormData {
  title: string;
  description: string;
  type: "ADOPCION" | "DONACION";
  petId: string;
  donationGoal?: number;
}

const NewCaseOng = () => {
  const { ong } = useOngAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
  if (!ong) return toast.error("ONG ID missing");

  const body =
    data.type === "DONACION"
      ? {
          titulo: data.title,
          descripcion: data.description,
          tipo: "DONACION",
          mascotaId: data.petId,
          ongId: ong.id,
          donacion: {
            metaDonacion: 100000, // 👈 valor fijo por ahora
          },
        }
      : {
          titulo: data.title,
          descripcion: data.description,
          tipo: "ADOPCION",
          mascotaId: data.petId,
          ongId: ong.id,
        };

  try {

    console.log("🟨 Body a enviar:", body);


    const res = await fetch("https://backend-hearts-paws-dev.onrender.com/casos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Failed to create case");

    toast.success("Case created successfully");
    reset();
  } catch (err) {
    toast.error("Case creation failed");
    console.error(err);
  }
};


  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-600">Create New Case</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <CaseForm register={register} errors={errors} watch={watch} />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition duration-300"
        >
          Publish Case
        </button>
      </form>
    </div>
  );
};

export default NewCaseOng;
