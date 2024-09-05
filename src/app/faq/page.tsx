import FAQCard from '@/components/faq/FAQCard'
import FAQSection from '@/components/faq/FAQSection'
import faqsApi from '@/services/faqs/faqs.service';

const FaqPage = async() => {

    const faqPages = await faqsApi.getFAQPages();

    return (
        <>
            <main>
                <FAQSection
                    sections={faqPages.data}
                />
            </main>

        </>
    )
}

export default FaqPage