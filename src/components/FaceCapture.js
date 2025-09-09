import { useEffect, useRef, useState } from "react";

export default function FaceCapture() {
  const videoRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 640, height: 480 } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setLoading(false);
        }
      } catch (err) {
        setError(`Camera error: ${err.message}`);
        setLoading(false);
      }
    };

    startVideo();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (loading) return <div className="text-center mt-8">Loading camera...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="flex justify-center mt-8">
      <video
        ref={videoRef}
        autoPlay
        muted
        width="640"
        height="480"
        className="border rounded"
      />
    </div>
  );
}
