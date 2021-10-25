import React from "react"

const Form = ({onChange, onSubmit, form}) => (
    <div className="container">
                <form 
                    onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mt-2" 
                            placeholder="title" 
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mt-2" 
                            placeholder="description" 
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control mt-2" 
                            placeholder="img" 
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control mt-2" 
                                placeholder="leftColor" 
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control mt-2"
                                placeholder="rightColor" 
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
                            />    
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="btn btn-primary mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
)

export default Form