if (Meteor.isClient) {
  Template.hello.firstData = function () {
      return { data: "firstData" };
  };

    Template.hello.otherData = function () {
        return { data: "otherData" };
    };
    
    Template.hello.someTemplate = function () {
        return "foo";
    };

    Template.foo.debug = function (parent1, parent2, parent3) {
        console.log("data: ", this);
        console.log("parent data with .. :", parent1);
        console.log("parent data with ../.. :", parent2);
        console.log("parent data with ../../.. :", parent3);
        console.log("parent data with _parentData(1): ", UI._parentData(1));
        console.log("parent data with _parentData(2): ", UI._parentData(2));
        console.log("parent data with _parentData(3): ", UI._parentData(3));
    };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
