import Badge from "./components/Badge/Badge";
import BannerText from "./components/Banner/BannerText";
import BannerTitle from "./components/Banner/BannerTitle";
import { IoLibraryOutline } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import Banner from "./components/Banner/index";
import Testimonial from "./components/Testimonial/Index";
import TestimonialImage from "./components/Testimonial/TestimonialImage";
import TestimonialText from "./components/Testimonial/TestimonialText";
import TestimonialName from "./components/Testimonial/TestimonialName";
import { VscTextSize } from "react-icons/vsc";
import TestimonialTitle from "./components/Testimonial/TestimonialTitle";

const App = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <header className="">
        <nav className="flex p-2 items-center content-center min-w-[360px]  mx-auto gap-4 bg-lime-300 ">
          <IoLibraryOutline className="text-6xl firstB:text-6xl" />

          <h1 className="font-bold text-2xl italic firstB:text-3xl">
            <span className="text-5xl text-blue-600">C</span>omponent{" "}
            <span className="text-red-600">L</span>ibrary++
          </h1>
        </nav>
      </header>
      <div className="flex flex-col mx-auto max-w-max min-w-[340px] fourthB:p-12 max-fourthB:flex fourthB:space-y-4">
        <section className="fourthB:flex fourthB:space-x-12 fourthB:flex-col fourthB:mx-auto">
          <h2 className="text-center font-bold text-6xl mt-4 fourthB:mr-6 fourthB:mt-0 ">
            Badges
          </h2>
          <div className="border-b border-lime-400 bg-lime-50 fourthB:mt-4">
            <div className="flex flex-col items-center p-2 mt-4 my-8">
              <h3 className="font-bold text-3xl mb-4 font-serif italic">
                Square
              </h3>
              <div className="rounded-md p-4 bg-lime-200 mx-12 grid firstB:grid-cols-2 secondB:grid-cols-3 thirdB:grid-cols-4 fourthB:grid-cols-5 ">
                <Badge variant="square" color="gray">
                  Gray
                </Badge>
                <Badge variant="square" color="red">
                  Red
                </Badge>
                <Badge variant="square" color="yellow">
                  Yellow
                </Badge>
                <Badge variant="square" color="green">
                  Green
                </Badge>
                <Badge variant="square" color="blue">
                  Blue
                </Badge>
                <Badge variant="square" color="indigo">
                  Indigo
                </Badge>
                <Badge variant="square" color="purple">
                  Purple
                </Badge>
                <Badge variant="square" color="pink">
                  Pink
                </Badge>
              </div>
            </div>
            <div className="flex flex-col items-center p-2 mt-4 my-8 ">
              <h3 className="font-bold text-3xl mb-4 font-serif italic">
                Pill
              </h3>
              <div className="rounded-md p-4 bg-lime-200 mx-12 grid firstB:grid-cols-2 secondB:grid-cols-3 thirdB:grid-cols-4 fourthB:grid-cols-5 ">
                <Badge variant="pill" color="gray">
                  Gray
                </Badge>
                <Badge variant="pill" color="red">
                  Red
                </Badge>
                <Badge variant="pill" color="yellow">
                  Yellow
                </Badge>
                <Badge variant="pill" color="green">
                  Green
                </Badge>
                <Badge variant="pill" color="blue">
                  Blue
                </Badge>
                <Badge variant="pill" color="indigo">
                  Indigo
                </Badge>
                <Badge variant="pill" color="purple">
                  Purple
                </Badge>
                <Badge variant="pill" color="pink">
                  Pink
                </Badge>
              </div>
            </div>
          </div>
        </section>
        <section className="fourthB:flex fourthB:space-x-12 fourthB:flex-col fourthB:mx-auto">
          <h2 className="text-center font-bold text-6xl mt-4">Banners</h2>
          <div className="border-b border-lime-400 bg-lime-50 mb-8 mt-4">
            <div className="flex flex-col items-center p-2 mt-4 my-8">
              <h3 className="font-bold text-3xl mb-4 font-serif italic">
                Multi-line
              </h3>
              <div className="rounded-md p-4 bg-lime-200 mx-12 grid firstB:grid-cols-2 secondB:grid-cols-2 thirdB:grid-cols-1 fourthB:grid-cols-2">
                <Banner type="success">
                  <BannerTitle>Success</BannerTitle>
                  <BannerText>
                    This is it, find it within you to give a flying banner
                    freedom
                  </BannerText>
                </Banner>
                <Banner type="warning">
                  <BannerTitle>Warning</BannerTitle>
                  <BannerText>
                    This is it, find it within you to give a flying banner
                    freedom
                  </BannerText>
                </Banner>
                <Banner type="error">
                  <BannerTitle>Error</BannerTitle>
                  <BannerText>
                    This is it, find it within you to give a flying banner
                    freedom
                  </BannerText>
                </Banner>
                <Banner type="neutral">
                  <BannerTitle>Neutral</BannerTitle>
                  <BannerText>
                    This is it, find it within you to give a flying banner
                    freedom
                  </BannerText>
                </Banner>
              </div>
            </div>
            <div className="flex flex-col items-center p-2 mt-4 my-8 italic">
              <h3 className="font-bold text-3xl mb-4 font-serif">
                Single-line
              </h3>
              <div className="rounded-md p-4 bg-lime-200 mx-12 grid firstB:grid-cols-2 secondB:grid-cols-3 thirdB:grid-cols-4">
                <Banner type="success">
                  <BannerTitle>Success</BannerTitle>
                </Banner>
                <Banner type="warning">
                  <BannerTitle>Warning</BannerTitle>
                </Banner>
                <Banner type="error">
                  <BannerTitle>Error</BannerTitle>
                </Banner>
                <Banner type="neutral">
                  <BannerTitle>Neutral</BannerTitle>
                </Banner>
              </div>
            </div>
          </div>
        </section>
        <section className="fourthB:flex fourthB:space-x-12 fourthB:flex-col fourthB:mx-auto">
          <h2 className="text-center font-bold text-6xl ">Testimonials</h2>
          <div className="grid border-b border-lime-400 bg-lime-50 mb-8 p-4 thirdB:grid-cols-2 mt-4">
            <Testimonial>
              <TestimonialImage>{"./images/one.jpg"}</TestimonialImage>
              <TestimonialText>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </TestimonialText>
              <TestimonialName>Newbon Gadson</TestimonialName>
              <TestimonialTitle>CEO unemployedGraduates</TestimonialTitle>
            </Testimonial>
            <Testimonial>
              <TestimonialImage>{"./images/two.jpg"}</TestimonialImage>
              <TestimonialText>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </TestimonialText>
              <TestimonialName>Newbon Gadson</TestimonialName>
              <TestimonialTitle>CEO unemployedGraduates</TestimonialTitle>
            </Testimonial>
            <Testimonial>
              <TestimonialImage>{"./images/three.jpg"}</TestimonialImage>
              <TestimonialText>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </TestimonialText>
              <TestimonialName>Newbon Gadson</TestimonialName>
              <TestimonialTitle>CEO unemployedGraduates</TestimonialTitle>
            </Testimonial>
            <Testimonial>
              <TestimonialImage>{"./images/four.jpg"}</TestimonialImage>
              <TestimonialText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TestimonialText>
              <TestimonialName>Newbon Gadson</TestimonialName>
              <TestimonialTitle>CEO unemployedGraduates</TestimonialTitle>
            </Testimonial>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
