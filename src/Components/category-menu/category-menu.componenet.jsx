import "./category-menu.styles.scss";
import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
class CategoryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "Portraits",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
          id: 1,
          linkUrl: "shop/portraits"
        },
        {
          title: "Landscapes",
          imageUrl:
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
          id: 2,
          linkUrl: "shop/landscapes"
        },
        {
          title: "Concept Art",
          imageUrl:
            "https://i.pinimg.com/originals/3b/1e/d7/3b1ed796949ff915fde488ed59a2469b.jpg",
          id: 3,
          linkUrl: "shop/Concept Art"
        },
        {
          title: "Digital Paintings",
          imageUrl:
            "https://static.proko.com/products/images/aaron-westerberg-masterpiece-demo-aaron-westerberg-demo-thumbnail-800x450x2.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/digitalpaintings"
        },
        {
          title: "Sketches",
          imageUrl:
            "https://static.proko.com/products/images/portrait-drawing-fundamentals-course-morgan-portrait-thumbnail-800x450x1.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/sketches"
        },
        {
          title: "Sculptures",
          imageUrl:
            "https://b4s5x6t6.stackpathcdn.com/wp-content/uploads/2019/11/hb_200178.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/sculptures"
        }
      ]
    };
  }
  render() {
    return (
      <div className="category-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem title={title} imgUrl={imageUrl} key={id} size={size} />
        ))}
      </div>
    );
  }
}

export default CategoryMenu;
