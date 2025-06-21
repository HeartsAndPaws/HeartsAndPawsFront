"use client";
import React from "react";
import SelectPet from "./SelectPet";

interface Props {
  register: any;
  errors: any;
  watch: any;
}

const CaseForm = ({ register, errors, watch }: Props) => {
  const type = watch("type");

  return (
    <>
      <div>
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
      </div>

      <div>
        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          {...register("description", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          rows={4}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
      </div>

      <div>
        <label className="block mb-2 font-semibold">Case Type</label>
        <select
          {...register("type", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="">Select one</option>
          <option value="ADOPCION">Adoption</option>
          <option value="DONACION">Donation</option>
        </select>
        {errors.type && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
      </div>

      <SelectPet register={register} errors={errors} />

      {/* {type === "DONACION" && (
        <div>
          <label className="block mb-2 font-semibold">Donation Goal (ARS)</label>
          <input
            type="number"
            {...register("donationGoal", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.donationGoal && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
        </div>
      )} */}
    </>
  );
};

export default CaseForm;
