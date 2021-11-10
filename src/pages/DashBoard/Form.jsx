import React, { useState } from "react"
import { formOpts, stateStatus } from "../../config"

export default function Form({ onBlur, onCreate, status }) {
  const [curIdx, setCurIdx] = useState(0)
  const [minPoint, setMinPoint] = useState("-3")
  const [maxPoint, setMaxPoint] = useState("10")

  const onChange = (selectedVal, text) => {
    const idx = formOpts[text].indexOf(+selectedVal)
    setCurIdx(idx)
  }

  const list = Object.entries(formOpts).map(([key, vals]) => (
    <FormItem key={key} text={key}>
      <div className="select">
        <select
          onChange={e => onChange(e.target.value, key)}
          value={formOpts[key][curIdx]}
        >
          {vals.map((val, index) => (
            <option key={index}>{val}</option>
          ))}
        </select>
      </div>
    </FormItem>
  ))

  const minPointCheck = Boolean(
    minPoint.length > 0 && -5 <= +minPoint && +minPoint <= 3
  )
  const maxPointCheck = Boolean(
    maxPoint.length > 0 && 5 <= +maxPoint && +maxPoint <= 15
  )

  return (
    <div className={`modal is-active`}>
      <div className="modal-background" onClick={onBlur}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create Match</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onBlur}
          ></button>
        </header>
        <section className="modal-card-body py-5">
          <div className="is-flex is-justify-content-space-around is-flex-wrap-wrap">
            {list}
          </div>
          <div className="is-flex is-justify-content-space-around">
            <FormItem text="Min Point">
              <input
                className="input"
                type="number"
                value={minPoint}
                onChange={e => setMinPoint(e.target.value)}
              />
              {!minPointCheck && (
                <p className="help is-danger">Value must be between -5 and 3</p>
              )}
            </FormItem>
            <FormItem text="Max Point">
              <input
                className="input"
                type="number"
                value={maxPoint}
                onChange={e => setMaxPoint(e.target.value)}
              />
              {!maxPointCheck && (
                <p className="help is-danger">Value must be between 5 and 15</p>
              )}
            </FormItem>
          </div>
        </section>
        <footer className="modal-card-foot is-centered">
          <button
            className={`button is-success ${
              status === stateStatus.loading && "is-loading"
            }`}
            onClick={() => onCreate(curIdx, +minPoint, +maxPoint)}
            disabled={!(maxPointCheck && minPointCheck)}
          >
            Create
          </button>
          <button className="button" onClick={onBlur}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}

const FormItem = ({ text, children }) => {
  return (
    <div className="field">
      <label className="label">{text}</label>
      <div className="control">{children}</div>
    </div>
  )
}
