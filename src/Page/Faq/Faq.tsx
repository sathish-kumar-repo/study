import React, { useState } from "react";
import "./Faq.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Section from "../../components/Section";

type FAQItem = {
  question: string;
  answer: string; // allow both string and JSX
};

const faqs: FAQItem[] = [
  {
    question: "What is Study?",
    answer:
      "Study is a personal website that hosts study materials, tutorials, personal development books, and a wide range of content including health, wealth, lifestyle, and relationships.",
  },
  {
    question: "What topics are covered on Study?",
    answer:
      "We cover academics, personal growth, mental health, wealth building, lifestyle tips, fitness, and relationship advice.",
  },
  {
    question: "Is all the content free?",
    answer:
      "Yes, all resources on Study are free for personal use. Some external books or courses may redirect to other platforms.",
  },
  {
    question: "Are there any paid courses on Study?",
    answer:
      "No, currently all courses and materials on Study are free. However, we do provide links to some paid courses on external platforms.",
  },
  {
    question: "How often is the content updated?",
    answer:
      "We update content regularly. New tutorials, books, and resources are added on a weekly basis. Stay tuned for updates via our social media channels.",
  },
  {
    question: "Can I download study materials?",
    answer:
      "Yes! Many PDFs, notes, and learning resources are available for download. Look for the download icons or links on each page.",
  },
  {
    question: "Is the content available in Tamil and Hindi?",
    answer:
      "Yes, we provide content in English, Tamil, and Hindi to make learning accessible to more people.",
  },
  {
    question: "Is there a mobile app for Study?",
    answer:
      "At the moment, there is no mobile app for Study. However, the website is fully responsive and works seamlessly on mobile devices.",
  },
  {
    question: "How can I contact you?",
    answer: "You can find all my contact details in the footer section below",
  },
  {
    question: "Can I contribute or suggest content?",
    answer:
      "Absolutely! Please use the contact methods above to send suggestions or contributions. We appreciate your input.",
  },
  {
    question: "Do you offer certifications?",
    answer:
      "Currently, Study does not issue certificates. However, we link to certified courses where applicable.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // First open

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`faq-item ${isActive ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-header">
                  <div className="faq-question">{faq.question}</div>
                  <div className="faq-icon">
                    {isActive ? <RemoveIcon /> : <AddIcon />}
                  </div>
                </div>
                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isActive ? "200px" : "0",
                    overflow: "hidden",
                  }}
                >
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
