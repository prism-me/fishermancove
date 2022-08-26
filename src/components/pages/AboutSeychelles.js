import React, { useEffect } from 'react'
import SeychellesIntroBlock from '../sections/about-seychelles/intro-block';
import SeychellesPillarsBlock from '../sections/about-seychelles/pillars-block';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { fetchSections, removeSelectedSection, } from '../../redux/actions/sectionsActions';

const AboutSeychelles = (props) => {

  const dispatch = useDispatch();
  const activeLang = localStorage.getItem('lang');

  //About seychelles page
  const pageId = `629707a57f20d344c2209512`;

  useEffect(() => {
    if (activeLang && activeLang !== "" && pageId && pageId !== "") dispatch(fetchSections(pageId, activeLang));
    return () => {
      dispatch(removeSelectedSection());
    };
  }, [pageId]);

  const banner = useSelector((state) => state.allSections.sections?.banner);
  const intro = useSelector((state) => state.allSections.sections?.intro);
  const meta = useSelector((state) => state.allSections.sections?.meta);

  const breadcrumbItems = [
    {
      text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
      link: '/',
      isActive: false,
    },
    {
      text: `${constants?.site_content?.aboutSeychelles_page?.bread_crumb?.title2[activeLang]}`,
      link: '/about-seychelles',
      isActive: true,
    },
  ]
  return (
    <div className="bg-white seychelles-wrapper">
      <SEOTags meta={meta} />

      {
        banner ?
          <PageLayout
            header={{ isMobile: props.isMobile, isTop: props.isTop }}
            banner={{ title: banner?.section_name, image: banner?.section_avatar?.avatar }}
            breadCrumb={{ items: breadcrumbItems }}
            activeLang={activeLang}
          >
            {/*/!*====== INTRO START ======*!/*/}
            <SeychellesIntroBlock data={intro}
              activeLang={activeLang}
            />
            {/*====== INTRO END ======*/}
            {/*====== PILLARS START ======*/}
            <SeychellesPillarsBlock
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

export default AboutSeychelles;
