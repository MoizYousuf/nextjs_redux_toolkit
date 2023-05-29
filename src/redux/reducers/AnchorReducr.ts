import { IAnchorState } from "@/app/types";
import { createReducer } from "@reduxjs/toolkit";
import { InitializeIdl, Operation } from "../actions/AnchorAction";
import { PlusProgram } from "@/idl/PlusProgram";


const initialState: IAnchorState<PlusProgram> = {
    program: null,
    tx: null
};

const AnchorReducer = createReducer(initialState, (builder) => {
    builder.addCase(InitializeIdl, (state, action) => {
        state.program = action.payload;
    });
    builder.addCase(Operation.fulfilled, (state, action) => {
        console.log(action.payload);
        state.tx = action.payload;
    });
});

export default AnchorReducer;