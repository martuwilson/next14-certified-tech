
import { httpGetPublic } from "../common/http.service";
import { URLSearchParams } from 'url';
import { StrapiResultType } from "@/types/strapi.types";
import { FaqPageType } from "@/types/faq.types";
import { strapiGet } from "../common/strapi.service";

class FaqsApi {
    getFAQPages = async (): Promise<StrapiResultType<FaqPageType>> => strapiGet(`/faq-pages`);
    
}

const faqsApi = new FaqsApi();

export default faqsApi;