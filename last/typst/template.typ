#let report(
  title: "タイトル",
  date: "2005年1月5日",
  student-id: "学籍番号",
  author: "氏名",
  paper-size: "a4",
  body,
) = {
  set document(title: title, author: author)
  set text(
    font: "Noto Serif JP",
    size: 12pt
  )
  set page(
    paper: paper-size,
    margin: (bottom: 1.75cm, top: 2.25cm),
  )

  align(center)[
    #v(15%)
    #text(30pt)[#title] \
    #v(50%)
    #text(15pt)[
      #date \
      #student-id #h(10pt) #author
    ]

    #pagebreak()
  ]

  set par(
    leading: 0.78em,
    first-line-indent: 14pt,
    justify: true
  )
  show par: set block(spacing: 1em)

  set heading(numbering: (..nums) => {
    nums.pos().map(str).join(".") + " "
  })
  show heading.where(level: 1): it => {
    counter(math.equation).update(0)
    set text(weight: "bold", size: 16pt)
    let pre_chapt = text()[
        #numbering(it.numbering, ..counter(heading).at(it.location()))
    ]
    text()[
      #v(20pt)
      #pre_chapt#it.body \
      #v(10pt)
    ]
  }
  show heading.where(level: 2): it => {
    set text(weight: "bold", size: 14pt)
    let pre_chapt = text()[
      #numbering(it.numbering, ..counter(heading).at(it.location()))
    ]
    text()[
      #v(20pt)
      #pre_chapt#it.body \
      #v(10pt)
    ]
  }
  show heading: it => {
    set par(first-line-indent: 0pt)
    it
  }

  set page(
    footer: [
      #align(center)[#counter(page).display("1")]
    ]
  )

  counter(page).update(1)

  body
}

#let image_num(_) = {
  locate(loc => str(counter(figure).at(loc).at(0)))
}

#let img(img, caption: "", height: none) = {
  figure(
    img,
    caption: caption,
    supplement: [図],
    numbering: image_num,
    kind: "image",
  )
}
