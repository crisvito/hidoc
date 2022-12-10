import { Button } from "../../components";
import { dataPertanyaan } from "../../data";
import { User } from "phosphor-react";
import parse from "html-react-parser";

export function TanyaList() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <Button
          children="Saya Ingin Bertanya..."
          className="text-sm py-2 px-7"
        />
      </div>
      <div className="w-3/4 py-10 flex justify-between items-start">
        <div className="flex flex-col gap-5">
          {dataPertanyaan.map((item) => {
            return (
              <div className="flex flex-col border-t-2 py-2 gap-5">
                <div className="flex justify-between items-start md:gap-10 sm:gap-8 gap-2">
                  <div className="flex flex-col sm:gap-3 gap-1">
                    <div className="flex gap-10 items-center">
                      <User size={50} className="md:inline-flex hidden" />
                      <h1 className="font-medium md:text-lg text-base lg:w-[32rem] md:w-96">
                        {item.question}
                      </h1>
                    </div>
                    <div className="flex flex-col text-xs">
                      <span>
                        Ditanya oleh :{" "}
                        <span className="font-bold">{item.questionBy}</span>
                      </span>
                      <span>
                        Dijawab oleh :{" "}
                        <span className="font-bold">{item.answerBy}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col text-xs uppercase font-medium gap-1 tracking-widest">
                    <span>{item.questionDate}</span>
                    <span>{item.questionTime}</span>
                  </div>
                </div>
                <span className="sm:text-sm text-xs sm:leading-loose leading-relaxed">
                  {parse(item.answer.slice(0, 250))}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
