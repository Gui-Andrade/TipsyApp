import React from "react";
import { shallow } from "enzyme";

import PastTips from "./PastTips";
import pastTips from "./pastTips";

const newPastTip = {
  "restaurant": "Cafe East",
  "date": "11/5/2018",
  "bill": "60",
  "tip": "10",
  "people": "2",
  "totalEach": "33"
};

test("<PastTips />", () => {
  it("Has 4 children", () => {
    const wrapper = shallow(<PastTips />);
    expect(wrapper.find("#pastTipsResult")).toHaveLength(4);
  });

  it("Check the state is okay", () => {
    const wrapper = shallow(<PastTips />);
    expect(wrapper.state().tips).toEqual(tips);
  });
  
  it("Change state and check it", () => {
    const newPastTips = tips.concat(newPastTip);
    const wrapper = shallow(<PastTips />);
    wrapper.setState({ tips: newPastTips });
    expect(wrapper.state().tips).toEqual(newPastTips);
    expect(wrapper.find("#pastTipsResult")).toHaveLength(5);
  });

  it("Click on tip and check number of elements", () => {
    const wrapper = shallow(<PastTips />);
    const tip = wrapper.find("#pastTipsResult").first();
    tip.simulate("click");

    expect(wrapper.state().tips).toEqual(
      pastTips.filter(tip => tip.restaurant !== "Pho Viet")
    );
    expect(wrapper.find("#pastTipsResult")).toHaveLength(5);
  });
});
