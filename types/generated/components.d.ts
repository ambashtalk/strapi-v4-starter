import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonCta extends Schema.Component {
  collectionName: 'components_common_ctas';
  info: {
    displayName: 'CTA';
    icon: 'expand';
  };
  attributes: {
    link: Attribute.Component<'common.list-item'>;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface CommonError extends Schema.Component {
  collectionName: 'components_common_errors';
  info: {
    displayName: 'error';
    icon: 'fileError';
    description: '';
  };
  attributes: {
    minLength: Attribute.Text;
    maxLength: Attribute.Text;
    invalid: Attribute.Text;
    empty: Attribute.Text;
  };
}

export interface CommonFaqItem extends Schema.Component {
  collectionName: 'components_common_faq_items';
  info: {
    displayName: 'Faq Item';
    description: '';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.RichText & Attribute.Required;
  };
}

export interface CommonHighlight extends Schema.Component {
  collectionName: 'components_common_highlights';
  info: {
    displayName: 'Highlight';
    icon: 'eye';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    text: Attribute.Component<'common.text-item'>;
  };
}

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    source: Attribute.Media<'images'>;
    background: Attribute.Text;
  };
}

export interface CommonInput extends Schema.Component {
  collectionName: 'components_common_inputs';
  info: {
    displayName: 'Input';
    icon: 'arrowRight';
  };
  attributes: {
    label: Attribute.Text;
    placeholder: Attribute.Text;
    type: Attribute.Enumeration<
      [
        'text',
        'number',
        'email',
        'password',
        'checkbox',
        'radio',
        'file',
        'date',
        'button',
        'submit'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'text'>;
    errors: Attribute.Component<'common.error'>;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface CommonListItem extends Schema.Component {
  collectionName: 'components_component_list_items';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'>;
    url: Attribute.String & Attribute.DefaultTo<'#'>;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface CommonSlide extends Schema.Component {
  collectionName: 'components_common_slides';
  info: {
    displayName: 'Slide';
    icon: 'chartCircle';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.Component<'common.text-item'>;
    topTitle: Attribute.String;
  };
}

export interface CommonTextItem extends Schema.Component {
  collectionName: 'components_common_text_items';
  info: {
    displayName: 'Text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface FormsRegistrationForm extends Schema.Component {
  collectionName: 'components_forms_registration_forms';
  info: {
    displayName: 'Registration Form';
    icon: 'file';
  };
  attributes: {
    header: Attribute.String;
    name: Attribute.Component<'common.input'> & Attribute.Required;
    phone: Attribute.Component<'common.input'> & Attribute.Required;
    email: Attribute.Component<'common.input'> & Attribute.Required;
    submit: Attribute.Component<'common.input'> & Attribute.Required;
  };
}

export interface SectionBanner extends Schema.Component {
  collectionName: 'components_section_banners';
  info: {
    displayName: 'Banner';
    icon: 'bold';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images'>;
    backgroundCSS: Attribute.Text;
    text: Attribute.Component<'common.text-item'> & Attribute.Required;
    cta: Attribute.Component<'common.cta'>;
  };
}

export interface SectionFaq extends Schema.Component {
  collectionName: 'components_section_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'discuss';
  };
  attributes: {
    header: Attribute.String;
    faqs: Attribute.Component<'common.faq-item', true>;
  };
}

export interface SectionFooter extends Schema.Component {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
    icon: 'expand';
    description: '';
  };
  attributes: {
    address: Attribute.Component<'common.text-item'> & Attribute.Required;
    contact: Attribute.Component<'common.text-item'> & Attribute.Required;
    socialLinks: Attribute.Component<'common.list-item', true>;
  };
}

export interface SectionGallery extends Schema.Component {
  collectionName: 'components_section_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'collapse';
  };
  attributes: {
    slides: Attribute.Component<'common.slide', true>;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    icon: 'expand';
    description: '';
  };
  attributes: {
    companyName: Attribute.String & Attribute.Required;
    companyLogo: Attribute.Media<'images'> & Attribute.Required;
    navItems: Attribute.Component<'common.list-item', true>;
    hamburgerIcon: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.cta': CommonCta;
      'common.error': CommonError;
      'common.faq-item': CommonFaqItem;
      'common.highlight': CommonHighlight;
      'common.image': CommonImage;
      'common.input': CommonInput;
      'common.list-item': CommonListItem;
      'common.slide': CommonSlide;
      'common.text-item': CommonTextItem;
      'forms.registration-form': FormsRegistrationForm;
      'section.banner': SectionBanner;
      'section.faq': SectionFaq;
      'section.footer': SectionFooter;
      'section.gallery': SectionGallery;
      'section.header': SectionHeader;
    }
  }
}
