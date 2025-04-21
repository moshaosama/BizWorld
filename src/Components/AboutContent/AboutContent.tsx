import { memo, useMemo } from "react";
import { Container } from "../../Style";
import Style from "./AboutContent.module.css";
import { HiCheck } from "react-icons/hi2";
import { CheckOutTextList } from "./AboutContentList";

type AboutContentProps = {
  flexDirection: "row" | "row-reverse";
  Header: string;
  Text: string;
  ShowCheckBox: boolean;
};

const CheckBox = () => {
  const CheckBoxListRender = useMemo(() => {
    return CheckOutTextList?.map((el: { Text: string }, index: number) => {
      return (
        <div className="flex gap-2 items-center" key={index}>
          <HiCheck className="text-[#4d61ff] bg-gray-700 w-5 h-5 text-xl font-extrabold rounded-xl" />
          <p>{el.Text}</p>
        </div>
      );
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 gap-2">{CheckBoxListRender}</div>
    </>
  );
};

const AboutContent = memo(
  ({
    flexDirection = "row",
    Header,
    Text,
    ShowCheckBox,
  }: AboutContentProps) => {
    const { Image } = Style;
    return (
      <div
        className={Container}
        style={{ marginTop: "5pc", flexDirection: flexDirection }}
      >
        <div className="text-white w-1/2 flex flex-col gap-10">
          <h1 className="font-bold text-3xl">{Header}</h1>
          <p className="text-xl font-serif ">{Text}ana</p>
          <div>{ShowCheckBox ? <CheckBox /> : null}</div>
        </div>
        <div>
          <img
            src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/tt1-1.jpg"
            alt="AboutCompany.png"
            className={Image}
          />
        </div>
      </div>
    );
  }
);

export default AboutContent;
