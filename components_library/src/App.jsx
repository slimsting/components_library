import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Testimonial from "./components/Testimonial/Index";
import { IoLibraryOutline } from "react-icons/io5";

const App = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-slate-50 min-w-[480px]">
      <header className="">
        <nav className="flex p-2 items-center content-center min-w-[360px]  mx-auto gap-4 bg-lime-300 shadow-md ">
          <IoLibraryOutline className="text-6xl firstB:text-6xl" />

          <h1 className="font-bold text-2xl italic firstB:text-3xl">
            <span className="text-5xl text-blue-600">C</span>omponent{" "}
            <span className="text-red-600">L</span>ibrary++
          </h1>
        </nav>
      </header>
      <div className="flex flex-col mx-auto min-w-[340px] fourthB:p-12 fourthB:flex fourthB:space-y-4">
        <section className=" flex flex-col items-center content-center fourthB:flex fourthB:flex-col fourthB:mx-auto">
          <h2 className="font-bold text-6xl mt-4 fourthB:mr-6 fourthB:mt-0 text-lime-900">
            Badges
          </h2>
          <div className="border-b fourthB:mt-4">
            <div className="flex flex-col items-center p-2 mt-4 my-8">
              <h3 className=" font-bold text-3xl mb-4 font-serif text-lime-600 underline">
                Square
              </h3>
              <div className="rounded-md p-4mx-12 grid firstB:grid-cols-2 secondB:grid-cols-3 thirdB:grid-cols-4 fourthB:grid-cols-5 ">
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
              <h3 className="font-bold text-3xl font-serif">Pill</h3>
              <div className="rounded-md p-4  mx-12 grid firstB:grid-cols-2 secondB:grid-cols-3 thirdB:grid-cols-4 fourthB:grid-cols-5 ">
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
        <section className="fourthB:flex  fourthB:flex-col fourthB:mx-auto">
          <h2 className="text-center font-bold text-6xl mt-4 text-lime-900">
            Banners
          </h2>
          <div className="border-b mt-4">
            <div className="flex flex-col items-center p-2 mt-4 my-8">
              <h3 className="font-bold text-3xl font-serif text-lime-600 underline">
                Multi-line
              </h3>
              <div className="rounded-md  mx-12 grid firstB:grid-cols-2 secondB:grid-cols-2 thirdB:grid-cols-1 fourthB:grid-cols-2">
                <Banner type="success">
                  <Banner.Title>Success</Banner.Title>
                  <Banner.Text>
                    This is it, find it within you to give a flying banner
                    freedom
                  </Banner.Text>
                </Banner>
                <Banner type="warning">
                  <Banner.Title>Warning</Banner.Title>
                  <Banner.Text>
                    This is it, find it within you to give a flying banner
                    freedom
                  </Banner.Text>
                </Banner>
                <Banner type="error">
                  <Banner.Title>Error</Banner.Title>
                  <Banner.Text>
                    This is it, find it within you to give a flying banner
                    freedom
                  </Banner.Text>
                </Banner>
                <Banner type="neutral">
                  <Banner.Title>Neutral</Banner.Title>
                  <Banner.Text>
                    This is it, find it within you to give a flying banner
                    freedom
                  </Banner.Text>
                </Banner>
              </div>
            </div>
            <div className="flex flex-col items-center p-2 mt-4 my-8">
              <h3 className="font-bold text-3xl font-serif text-lime-600 underline ">
                Single-line
              </h3>
              <div className="rounded-md p-4 mx-12 grid firstB:grid-cols-2 secondB:grid-cols-3 thirdB:grid-cols-4">
                <Banner type="success">
                  <Banner.Title>Success</Banner.Title>
                </Banner>
                <Banner type="warning">
                  <Banner.Title>Warning</Banner.Title>
                </Banner>
                <Banner type="error">
                  <Banner.Title>Error</Banner.Title>
                </Banner>
                <Banner type="neutral">
                  <Banner.Title>Neutral</Banner.Title>
                </Banner>
              </div>
            </div>
          </div>
        </section>
        <section className="fourthB:flex fourthB:flex-col ">
          <h2 className="text-center font-bold text-6xl mt-4 text-lime-900">
            Testimonials
          </h2>
          <div className="grid border-b mb-8 p-4 thirdB:grid-cols-2 mt-4 fourthB:m-8">
            <Testimonial>
              <Testimonial.Image>{"./images/one.jpg"}</Testimonial.Image>
              <Testimonial.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
              </Testimonial.Text>
              <Testimonial.Name>Newbon Gadson</Testimonial.Name>
              <Testimonial.Title>CEO unemployedGraduates</Testimonial.Title>
            </Testimonial>
            <Testimonial>
              <Testimonial.Image>{"./images/two.jpg"}</Testimonial.Image>
              <Testimonial.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomiseds
              </Testimonial.Text>
              <Testimonial.Name>Newbon Gadson</Testimonial.Name>
              <Testimonial.Title>CEO unemployedGraduates</Testimonial.Title>
            </Testimonial>
            <Testimonial>
              <Testimonial.Image>{"./images/three.jpg"}</Testimonial.Image>
              <Testimonial.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </Testimonial.Text>
              <Testimonial.Name>Newbon Gadson</Testimonial.Name>
              <Testimonial.Title>CEO unemployedGraduates</Testimonial.Title>
            </Testimonial>
            <Testimonial>
              <Testimonial.Image>{"./images/four.jpg"}</Testimonial.Image>
              <Testimonial.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Testimonial.Text>
              <Testimonial.Name>Newbon Gadson</Testimonial.Name>
              <Testimonial.Title>CEO unemployedGraduates</Testimonial.Title>
            </Testimonial>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
