import Container from "../layout/container";
import { Facebook, Mail, Phone } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useGetStructure } from "@/lib/hooks/useGetStructure";
import { useZusLang } from "@/zustand/use-zus-lang";
import useExtractSectionTitle from "@/lib/hooks/useExtractSectionTitle";

const AboutStructure = () => {
  const activeLang = useZusLang((state) => state.activeLang);
  const { data } = useGetStructure(activeLang.value);
  const sectionTitle = useExtractSectionTitle(
    "federation_structure_section_title"
  );

  return (
    <section>
      <Container>
        <motion.div
          initial={{
            translateY: "20%",
            opacity: 0,
          }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
          className="flex md:flex-row flex-col justify-between items-start md:pt-10 pt-2 border-t border-LBROWN"
        >
          <h2 className="h2 font-[bitter] mb-6 md:mb-0 text-BROWN">
            {sectionTitle}
          </h2>

          {data && (
            <div className="flex flex-col gap-4 md:gap-[50px]">
              {data.map((person, i) => (
                <div
                  key={i}
                  className={clsx(
                    "flex flex-col pb-4 md:pb-[50px] md:gap-5 gap-2",
                    {
                      "border-b border-LBROWN": i < 3 - 1,
                    }
                  )}
                >
                  <div className="font-[bitter] text-DGRAY2 leading-[130%] font-semibold text-[13px] md:text-[20px]">
                    {person?.job}
                  </div>
                  <h3 className="h3 font-[bitter]">{person?.name}</h3>

                  <div className="flex md:flex-row flex-col md:items-center gap-2.5 text-DGRAY2 leading-none">
                    {person?.email && (
                      <div className="flex items-center gap-1 md:gap-3">
                        <Mail color="#999999" className="size-4 md:size-6" />
                        {person?.email}
                      </div>
                    )}
                    {person?.phone && (
                      <div className="flex items-center gap-1 md:gap-3">
                        <Phone color="#999999" className="size-4 md:size-6" />
                        {person?.phone}
                      </div>
                    )}
                    {person?.facebook && (
                      <div className="flex items-center gap-1 md:gap-3">
                        <Facebook
                          color="#999999"
                          className="size-4 md:size-6"
                        />
                        {person?.facebook}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutStructure;
