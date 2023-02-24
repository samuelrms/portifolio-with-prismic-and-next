// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for about documents */
interface AboutDocumentData {
    /**
     * about_me field in *about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.about_me
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    about_me: prismicT.KeyTextField;
    /**
     * name field in *about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * presentation field in *about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.presentation
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    presentation: prismicT.KeyTextField;
    /**
     * experience field in *about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.experience
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    experience: prismicT.KeyTextField;
    /**
     * motivational field in *about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.motivational
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    motivational: prismicT.KeyTextField;
    /**
     * title_resume field in *about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.title_resume
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title_resume: prismicT.KeyTextField;
    /**
     * resume field in *about*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.resume
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    resume: prismicT.RichTextField;
    /**
     * image_person field in *about*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about.image_person
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_person: prismicT.ImageField<never>;
}
/**
 * about document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for courses documents */
interface CoursesDocumentData {
    /**
     * title field in *courses*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *courses*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * courses_taken field in *courses*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.courses_taken[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    courses_taken: prismicT.GroupField<Simplify<CoursesDocumentDataCoursesTakenItem>>;
}
/**
 * Item in courses → courses_taken
 *
 */
export interface CoursesDocumentDataCoursesTakenItem {
    /**
     * title field in *courses → courses_taken*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.courses_taken[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * completion_period field in *courses → courses_taken*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.courses_taken[].completion_period
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    completion_period: prismicT.KeyTextField;
    /**
     * workload field in *courses → courses_taken*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.courses_taken[].workload
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    workload: prismicT.KeyTextField;
    /**
     * achievement_platform field in *courses → courses_taken*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.courses_taken[].achievement_platform
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    achievement_platform: prismicT.KeyTextField;
    /**
     * certificates_link field in *courses → courses_taken*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.courses_taken[].certificates_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    certificates_link: prismicT.LinkField;
    /**
     * resume field in *courses → courses_taken*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: courses.courses_taken[].resume
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    resume: prismicT.RichTextField;
}
/**
 * courses document from Prismic
 *
 * - **API ID**: `courses`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CoursesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<CoursesDocumentData>, "courses", Lang>;
/** Content for experience documents */
interface ExperienceDocumentData {
    /**
     * title field in *experience*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experience.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *experience*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experience.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * work_experience field in *experience*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: experience.work_experience[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    work_experience: prismicT.GroupField<Simplify<ExperienceDocumentDataWorkExperienceItem>>;
}
/**
 * Item in experience → work_experience
 *
 */
export interface ExperienceDocumentDataWorkExperienceItem {
    /**
     * entry_year field in *experience → work_experience*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experience.work_experience[].entry_year
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    entry_year: prismicT.KeyTextField;
    /**
     * exit_year field in *experience → work_experience*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experience.work_experience[].exit_year
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    exit_year: prismicT.KeyTextField;
    /**
     * function field in *experience → work_experience*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experience.work_experience[].function
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    function: prismicT.KeyTextField;
    /**
     * description_function field in *experience → work_experience*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: experience.work_experience[].description_function
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description_function: prismicT.KeyTextField;
}
/**
 * experience document from Prismic
 *
 * - **API ID**: `experience`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ExperienceDocumentData>, "experience", Lang>;
/** Content for home_hero documents */
interface HomeHeroDocumentData {
    /**
     * photo field in *home_hero*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.photo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    photo: prismicT.ImageField<never>;
    /**
     * title field in *home_hero*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *home_hero*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * presentation_area field in *home_hero*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    presentation_area: prismicT.GroupField<Simplify<HomeHeroDocumentDataPresentationAreaItem>>;
    /**
     * presentation_skills field in *home_hero*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    presentation_skills: prismicT.GroupField<Simplify<HomeHeroDocumentDataPresentationSkillsItem>>;
    /**
     * about field in *home_hero*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.about[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    about: prismicT.GroupField<Simplify<HomeHeroDocumentDataAboutItem>>;
}
/**
 * Item in home_hero → presentation_area
 *
 */
export interface HomeHeroDocumentDataPresentationAreaItem {
    /**
     * comment field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].comment
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    comment: prismicT.KeyTextField;
    /**
     * title field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * open field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].open
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    open: prismicT.KeyTextField;
    /**
     * label_function field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].label_function
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_function: prismicT.KeyTextField;
    /**
     * content_function field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].content_function
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_function: prismicT.KeyTextField;
    /**
     * label_level field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].label_level
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_level: prismicT.KeyTextField;
    /**
     * content_level field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].content_level
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_level: prismicT.KeyTextField;
    /**
     * close field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].close
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    close: prismicT.KeyTextField;
}
/**
 * Item in home_hero → presentation_skills
 *
 */
export interface HomeHeroDocumentDataPresentationSkillsItem {
    /**
     * title field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * open field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].open
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    open: prismicT.KeyTextField;
    /**
     * label_tech_stack field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].label_tech_stack
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_tech_stack: prismicT.KeyTextField;
    /**
     * content_tech_stack field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].content_tech_stack
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_tech_stack: prismicT.KeyTextField;
    /**
     * label_frameworks field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].label_frameworks
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_frameworks: prismicT.KeyTextField;
    /**
     * content_frameworks field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].content_frameworks
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_frameworks: prismicT.KeyTextField;
    /**
     * close field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].close
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    close: prismicT.KeyTextField;
}
/**
 * Item in home_hero → about
 *
 */
export interface HomeHeroDocumentDataAboutItem {
    /**
     * open field in *home_hero → about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.about[].open
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    open: prismicT.KeyTextField;
    /**
     * title field in *home_hero → about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.about[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * label field in *home_hero → about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.about[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * close field in *home_hero → about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.about[].close
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    close: prismicT.KeyTextField;
    /**
     * resume field in *home_hero → about*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.about[].resume
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    resume: prismicT.KeyTextField;
}
/**
 * home_hero document from Prismic
 *
 * - **API ID**: `home_hero`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeHeroDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeHeroDocumentData>, "home_hero", Lang>;
/** Content for projects documents */
interface ProjectsDocumentData {
    /**
     * Title field in *projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * type field in *projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.type
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    type: prismicT.KeyTextField;
    /**
     * Project Link field in *projects*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.project_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    project_link: prismicT.LinkField;
    /**
     * Thumb field in *projects*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.thumb
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumb: prismicT.ImageField<never>;
}
/**
 * projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectsDocumentData>, "projects", Lang>;
/** Content for skills documents */
interface SkillsDocumentData {
    /**
     * skills_title field in *skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.skills_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    skills_title: prismicT.KeyTextField;
    /**
     * skills field in *skills*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.skills[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    skills: prismicT.GroupField<Simplify<SkillsDocumentDataSkillsItem>>;
}
/**
 * Item in skills → skills
 *
 */
export interface SkillsDocumentDataSkillsItem {
    /**
     * logo_skill field in *skills → skills*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.skills[].logo_skill
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo_skill: prismicT.ImageField<never>;
    /**
     * name_skill field in *skills → skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.skills[].name_skill
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name_skill: prismicT.KeyTextField;
}
/**
 * skills document from Prismic
 *
 * - **API ID**: `skills`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkillsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SkillsDocumentData>, "skills", Lang>;
export type AllDocumentTypes = AboutDocument | CoursesDocument | ExperienceDocument | HomeHeroDocument | ProjectsDocument | SkillsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocument, CoursesDocumentData, CoursesDocumentDataCoursesTakenItem, CoursesDocument, ExperienceDocumentData, ExperienceDocumentDataWorkExperienceItem, ExperienceDocument, HomeHeroDocumentData, HomeHeroDocumentDataPresentationAreaItem, HomeHeroDocumentDataPresentationSkillsItem, HomeHeroDocumentDataAboutItem, HomeHeroDocument, ProjectsDocumentData, ProjectsDocument, SkillsDocumentData, SkillsDocumentDataSkillsItem, SkillsDocument, AllDocumentTypes };
    }
}
