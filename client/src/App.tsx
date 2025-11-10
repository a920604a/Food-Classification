import { useState } from "react";

type PredictionResult = {
  food: string;
  calories: number;
};

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://your-server.com/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error");

      const data: PredictionResult = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("上傳失敗");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI 食物辨識</h1>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
      />
      {image && (
        <div>
          <h3>圖片預覽：</h3>
          <img src={image} alt="preview" style={{ width: 200, marginTop: 10 }} />
        </div>
      )}
      {loading && <p>辨識中...</p>}
      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>辨識結果：</h3>
          <p>食物: {result.food}</p>
          <p>熱量: {result.calories} kcal</p>
        </div>
      )}
    </div>
  );
}

export default App;
