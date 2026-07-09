import { useLanguage } from "../context/useLanguage";
import { translations } from "./translations";

export const useT = () => {
  const { language } = useLanguage();
  return translations[language];
};
