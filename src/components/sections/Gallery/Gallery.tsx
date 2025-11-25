import { ScrollReveal } from "../../animations/ScrollReveal";
import img1 from "../../../assets/images/gallery/IMG_3187.png";
import img2 from "../../../assets/images/gallery/IMG_3188.png";
import img3 from "../../../assets/images/gallery/IMG_3189.png";
import img4 from "../../../assets/images/gallery/IMG_3190.png";
import img5 from "../../../assets/images/gallery/IMG_3191.png";
import img6 from "../../../assets/images/gallery/IMG_1410.jpg";
import img7 from "../../../assets/images/gallery/IMG_6978.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Community in Action</h2>
        </ScrollReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="break-inside-avoid mb-4 rounded-xl overflow-hidden relative group">
               <img 
                 src={src} 
                 alt={`Gallery image ${i + 1}`} 
                 className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
               />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
