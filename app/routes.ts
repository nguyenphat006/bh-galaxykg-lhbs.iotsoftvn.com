import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  layout('components/layouts/layout.tsx', [
    // Home page
    index('routes/home.tsx'),
    
    // School Programs - Main routes and tuition fees
    route('high-school', 'routes/high-school/page.tsx'),
    route('high-school/tuition-fees', 'routes/high-school/TuitionFeesPage.tsx'),
    route('primary-school', 'routes/primary-school/page.tsx'),
    route('primary-school/tuition-fees', 'routes/primary-school/TuitionFeesPage.tsx'),
    route('secondary-school', 'routes/secondary-school/page.tsx'),
    route('secondary-school/tuition-fees', 'routes/secondary-school/TuitionFeesPage.tsx'),
    
    // Admission Module - /admissions/*
    route('admissions', 'routes/admission/page.tsx'),
    route('admissions/tuition-fees', 'routes/admission/tuition-fees.tsx'),
    route('admissions/scholarships', 'routes/admission/schoolarships.tsx'),
    route('admissions/entry-requirements', 'routes/admission/entry-requirement.tsx'),
    route('admissions/opendays', 'routes/admission/open-days.tsx'),
    
    // LHBS Campus Module - /our-school/*  
    route('our-school', 'routes/lhbs-campus/page.tsx'),
    route('our-school/about-us', 'routes/lhbs-campus/about.tsx'),
    route('our-school/facilities', 'routes/lhbs-campus/facilities.tsx'),
    
    // Holistic Education Module - /academics/*
    route('academics', 'routes/holistic/page.tsx'),
    route('academics/how-we-teach', 'routes/holistic/how-we-teach.tsx'),
    route('academics/counselling', 'routes/holistic/counselling.tsx'),
    
    // Paths to Passion Module - /paths-to-passion/*
    route('paths-to-passion', 'routes/passion/page.tsx'),
    route('paths-to-passion/clubs-activities', 'routes/passion/activities.tsx'),
    
    // Others Module - Various pages
    route('news-events', 'routes/orthers/news-event.tsx'),
    route('academic-results', 'routes/orthers/academic-results.tsx'),
    route('admissions/apply-now', 'routes/orthers/apply-now.tsx'),
    route('parents/essentials', 'routes/orthers/parents.tsx'),
    
    // Catch-all route for 404 pages (must be last)
    route('*', 'routes/404.tsx'),
  ])
] satisfies RouteConfig
