import React, { Component } from 'react'
import WeddingTitleBlock from '../sections/wedding-main/main-text-block';
import WeddingGrid from '../sections/wedding-main/wedding-grid';
import WeddingFormDialog from '../sections/wedding-main/quote-form';
import FAQSection from '../sections/common/FAQSection';
import API from '../../langapi/http';
import SEOTags from '../sections/common/SEOTags';
import PageLayout from '../layouts/PageLayout';
import { constants } from "../../utils/constants";



const pageId = `629706a2aae6f31e547b80c3`;

class Wedding extends Component {
  state = {
    weddingData: [],
    intro: null,
    banner: null,
    faq: [],
    meta: {}
  }


  componentDidMount() {
    const activeLang = localStorage.getItem('lang');

    API.get(`/weddings?lang=${activeLang}`).then(response => {
      this.setState({
        weddingData: response.data?.data
      });
    }).then(() => {
      API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
        this.setState({
          banner: response?.data?.data[0]?.banner,
          intro: response?.data?.data[0]?.intro,
          meta: response?.data?.data[0]?.meta,
          faq: response?.data?.data[0]?.faq?.section_content
        });
      })
    })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    const activeLang = localStorage.getItem('lang');

    const breadcrumbItems = [
      {
        text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
        link: '/',
        isActive: false,
      },
      {
        text: `${constants?.site_content?.weddings_page?.bread_crumb?.title2[activeLang]}`,
        link: '/wedding',
        isActive: true,
      },
    ];

    return (
      <div className="bg-white">
        <SEOTags meta={this.state.meta} />
        {
          this.state.banner ?
            <PageLayout
              header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
              banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
              breadCrumb={{ items: breadcrumbItems }}
              activeLang={activeLang}
            >
              {/*====== TITLE START ======*/}
              <WeddingTitleBlock intro={this.state.intro}
                activeLang={activeLang}
              />
              {/*====== TITLE END ======*/}
              {/*====== ROOM GRID START ======*/}
              <WeddingGrid title={constants?.site_content?.weddings_page?.wedding_grid?.title[activeLang]}
                data={this.state.weddingData} />
              {/*====== ROOM GRID END ======*/}
              <WeddingFormDialog
                activeLang={activeLang}
              />

              <FAQSection
                faqData={this.state.faq}
                activeLang={activeLang}
              />
            </PageLayout>
            :
            <div className={"preloader align-items-center justify-content-center"}>
              <div className="cssload-container">
                <div className="cssload-loading"><i /><i /><i /><i /></div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default Wedding;
