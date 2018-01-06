import {JsonSchema} from "../../../../src/jsonschema/class/JsonSchema";
import {Any} from "../../../../src/jsonschema/decorators/any";
import {decoratorSchemaFactory} from "../../../../src/jsonschema/utils/decoratorSchemaFactory";
import {stubSchemaDecorator} from "./utils";

describe("Any", () => {
    before(() => {
        this.decoratorStub = stubSchemaDecorator();
        this.schema = new JsonSchema();
        Any();
        this.decoratorStub.getCall(0).args[0](this.schema);
    });
    after(() => {
        this.decoratorStub.restore();
    });

    it("should store data", () => {
        this.schema.type.should.deep.eq("any");
    });
});