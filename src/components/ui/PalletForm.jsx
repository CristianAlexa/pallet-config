import { ColorNodeUniform } from "three/src/renderers/common/nodes/NodeUniform.js";
import { usePallet } from "../../context/PalletContext";

const PalletForm = () => {
  const { palletData, caseData, setPalletData, setCaseData, setIsVisible } =
    usePallet();

  const submitData = (e) => {
    e.preventDefault();
    const productObj = {
      sku: String(e.currentTarget.sku.value),
      productName: String(e.currentTarget.productName.value),
      caseLength: Number(e.currentTarget.caseLength.value),
      caseWidth: Number(e.currentTarget.caseWidth.value),
      caseHeight: Number(e.currentTarget.caseHeight.value),
      caseWeight: Number(e.currentTarget.caseWeight.value),
    };
    const palletObj = {
      palletType: String(e.currentTarget.palletType.value),
      loadingHeight: Number(e.currentTarget.loadingHeight.value),
    };

    setCaseData(productObj);
    setPalletData(palletObj);
    setIsVisible(true);

    console.log(palletData, caseData);
  };
  return (
    <form className="space-y-6" onSubmit={submitData}>
      {/* Product data  */}
      <h3 className="text-2xl font-bold text-green-600 mb-2">
        Product details:
      </h3>
      <div className="grid grid-cols-3 gap-3 mb-2">
        <input
          type="text"
          placeholder="SKU"
          name="sku"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 text-right input focus:border-slate-700"
        />
        <input
          type="text"
          placeholder="name"
          name="productName"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 input focus:border-slate-700 col-span-2"
        />
      </div>

      {/* Box data */}
      <h3 className="text-lg font-semibold text-green-600 mb-2">
        Case dimensions*:
      </h3>

      <div className="grid grid-cols-3 gap-3 mb-2">
        <input
          type="number"
          placeholder="length"
          name="caseLength"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 text-right input focus:border-slate-700"
          required
        />
        <input
          type="number"
          placeholder="width"
          name="caseWidth"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 text-right input focus:border-slate-700"
          required
        />
        <input
          type="number"
          placeholder="height"
          name="caseHeight"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 text-right input focus:border-slate-700"
          required
        />
      </div>
      <p className="text-slate-600  mb-6">Length x Width x Height</p>
      <div className="grid grid-cols-2 gap-3 mb-8">
        <label className="text-lg font-semibold text-green-600 mb-2">
          Case weight in kg:
        </label>
        <input
          type="number"
          step=".01"
          placeholder="weight"
          name="caseWeight"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 text-right input focus:border-slate-700"
        />
      </div>

      {/* Pallet data */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <label className="text-lg font-semibold text-green-600 mb-2">
          Pallet type:
        </label>

        <select
          placeholder="select"
          name="palletType"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 text-slate-600 text-sm focus:ring-slate-300 focus:border-slate-700 block placeholder-slate-400 input"
        >
          <option value={"ukPallet"}>UK pallet 1200 x 1000</option>
          <option value={"euroPallet"}>EURO pallet 1200 x 800</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-8">
        <label className="text-lg font-semibold text-green-600 mb-2 ">
          Loading height*:
        </label>
        <input
          type="number"
          placeholder="load height"
          name="loadingHeight"
          className="py-2 px-4 bg-slate-100 outline-0 border border-slate-300 text-right input focus:border-slate-700"
          required
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className=" bg-green-600 text-white px-8 py-2 rounded hover:bg-green-500 cursor-pointer"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default PalletForm;
