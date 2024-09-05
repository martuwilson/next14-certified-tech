import FAQSection from '@/components/faq/FAQSection';
import faqsApi from '@/services/faqs/faqs.service';
import React from 'react';

const FaqPage = async ({ params }: { params: { slug: string } }) => {
    const faqPages = await faqsApi.getFAQPages();

    const faqPage = faqPages.data.find(page => page.attributes.slug === `/${params.slug}`);

    return (
        <>
            <main>
                <FAQSection sections={faqPages.data} />
                <section className="flex flex-col">
                    <h2>
                        {faqPage?.attributes.title || "Título no encontrado"}
                    </h2>
                    <div>
                        {faqPage?.attributes.body || "Contenido no disponible"}
                    </div>
                </section>
            </main>
        </>
    );
};

export default FaqPage;
