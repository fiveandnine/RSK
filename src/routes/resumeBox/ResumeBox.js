import InfoBox from '../../components/InfoBox/InfoBox';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ResumeBox.css';

class ResumeBox extends React.Component {
  static propTypes = {
    // news: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     title: PropTypes.string.isRequired,
    //     link: PropTypes.string.isRequired,
    //     content: PropTypes.string,
    //   }),
    // ).isRequired,
  };

  render() {
    const {data} = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <InfoBox defaultData={[{name: 'name',value:'name'},{name: 'email'}]} defaultLayout={{title: 'title',leftIcon: 'leftIcon',content:'请添加基本信息'}}/>
          <InfoBox defaultData={[{name: 'name',value:'name'},{name: 'email'}]} defaultLayout={{title: 'title',leftIcon: 'leftIcon',content:'请添加基本信息'}}/>
          <InfoBox defaultData={[{name: 'name',value:'name'},{name: 'email'}]} defaultLayout={{title: 'title',leftIcon: 'leftIcon',content:'请添加基本信息'}}/>
          <InfoBox defaultData={[{name: 'name',value:'name'},{name: 'email'}]} defaultLayout={{title: 'title',leftIcon: 'leftIcon',content:'请添加基本信息'}}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ResumeBox);


//
// {this.props.news.map(item => (
//   <article key={item.link} className={s.newsItem}>
//     <h1 className={s.newsTitle}>
//       <a href={item.link}>{item.title}</a>
//     </h1>
//     <div
//       className={s.newsDesc}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: item.content }}
//     />
//   </article>
// ))}
