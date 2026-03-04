import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    containerDark: {
        backgroundColor: '#020617',
    },
    headerWrapper: {
        marginTop: 20,
        backgroundColor: '#f9fafb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e5e7eb',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#f9fafb',
    },
    headerDark: {
        backgroundColor: '#020617',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
    },
    logo: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#10b981',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    logoText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    appTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: '#111827',
    },
    appTitleDark: {
        color: '#f9fafb',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navRow: {
        flexDirection: 'row',
        marginTop: 4,
    },
    navLink: {
        marginTop: 20,
        fontSize: 13,
        color: '#6b7280',
        marginRight: 15,
    },
    navLinkActive: {
        color: '#111827',
        fontWeight: '600',
    },
    navLinkDark: {
        color: '#9ca3af',
    },
    navLinkActiveDark: {
        color: '#f9fafb',
    },
    modePill: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: '#111827',
        marginRight: 10,
    },
    modePillDark: {
        backgroundColor: '#f9fafb',
    },
    modePillText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#f9fafb',
    },
    modePillTextDark: {
        color: '#020617',
    },
    loggedInAs: {
        fontSize: 11,
        color: '#6b7280',
        marginRight: 4,
    },
    userName: {
        fontSize: 12,
        color: '#111827',
        fontWeight: '600',
        marginRight: 8,
    },
    loggedInAsDark: {
        color: '#9ca3af',
    },
    userNameDark: {
        color: '#f9fafb',
    },
    logoutPill: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#d1d5db',
        backgroundColor: '#ffffff',
    },
    logoutText: {
        fontSize: 11,
        color: '#6b7280',
        fontWeight: '500',
    },
    logoutPillDark: {
        backgroundColor: '#020617',
        borderColor: '#4b5563',
    },
    logoutTextDark: {
        color: '#e5e7eb',
    },
    searchRow: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 8,
        backgroundColor: '#ffffff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e5e7eb',
    },
    searchRowDark: {
        backgroundColor: '#020617',
        borderBottomColor: '#1f2937',
    },
    searchInput: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#f3f4f6',
        fontSize: 14,
        color: '#111827',
    },
    searchInputDark: {
        backgroundColor: '#020617',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#374151',
        color: '#e5e7eb',
    },
    dashboardMessageContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    dashboardMessageText: {
        fontSize: 13,
        color: '#6b7280',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32,
    },
    heroCard: {
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#ecfdf5',
        marginBottom: 16,
    },
    heroCardDark: {
        backgroundColor: '#022c22',
    },
    heroLabel: {
        fontSize: 11,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: '#10b981',
        marginBottom: 4,
    },
    heroLabelDark: {
        color: '#6ee7b7',
    },
    heroTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#022c22',
        marginBottom: 4,
    },
    heroTitleDark: {
        color: '#ecfdf5',
    },
    heroSubtitle: {
        fontSize: 13,
        color: '#047857',
        marginBottom: 12,
    },
    heroSubtitleDark: {
        color: '#a7f3d0',
    },
    heroActionsRow: {
        flexDirection: 'row',
        marginTop: 4,
    },
    heroResumePill: {
        flex: 1,
        borderRadius: 9,
        justifyContent: 'center',
        backgroundColor: '#10b981',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    heroResumePillDark: {
        backgroundColor: '#22c55e',
    },
    heroResumeLabel: {
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#bbf7d0',
    },
    heroResumeTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#ecfdf5',
    },
    heroResumeMeta: {
        fontSize: 11,
        color: '#d1fae5',
    },
    weekAndThoughtRow: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    weekCard: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        padding: 12,
        marginRight: 0,
        marginBottom: 12,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#e5e7eb',
    },
    weekCardDark: {
        backgroundColor: '#020617',
        borderColor: '#111827',
    },
    weekHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    weekLabel: {
        fontSize: 11,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: '#6b7280',
    },
    weekLabelDark: {
        color: '#9ca3af',
    },
    weekSubtitle: {
        fontSize: 12,
        color: '#6b7280',
    },
    weekSubtitleDark: {
        color: '#9ca3af',
    },
    weekStreakMeta: {
        alignItems: 'flex-end',
    },
    weekStreakLabel: {
        fontSize: 10,
        color: '#6b7280',
    },
    weekStreakLabelDark: {
        color: '#9ca3af',
    },
    weekStreakValue: {
        fontSize: 12,
        fontWeight: '600',
        color: '#10b981',
    },
    weekDaysRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    weekDayItem: {
        alignItems: 'center',
    },
    weekDayCircle: {
        width: 24,
        height: 24,
        borderRadius: 999,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#e5e7eb',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
    },
    weekDayCircleDark: {
        borderColor: '#1f2937',
        backgroundColor: '#020617',
    },
    weekDayText: {
        fontSize: 11,
        color: '#6b7280',
    },
    weekDayTextDark: {
        color: '#e5e7eb',
    },
    weekDayLabel: {
        fontSize: 10,
        color: '#9ca3af',
        marginTop: 2,
    },
    weekDayLabelDark: {
        color: '#6b7280',
    },
    thoughtCard: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: '#ecfdf5',
        padding: 12,
        marginLeft: 0,
        marginTop: 4,
    },
    thoughtCardDark: {
        backgroundColor: '#022c22',
    },
    thoughtLabel: {
        fontSize: 11,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: '#10b981',
        marginBottom: 4,
    },
    thoughtLabelDark: {
        color: '#6ee7b7',
    },
    thoughtQuote: {
        fontSize: 13,
        color: '#022c22',
        marginBottom: 6,
    },
    thoughtQuoteDark: {
        color: '#ecfdf5',
    },
    thoughtHint: {
        fontSize: 11,
        color: '#047857',
    },
    thoughtHintDark: {
        color: '#a7f3d0',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 12,
        color: '#111827',
    },
    sectionTitleDark: {
        color: '#f9fafb',
    },
    emptyStateText: {
        fontSize: 14,
        color: '#9ca3af',
        textAlign: 'center',
        marginVertical: 20,
    },
    courseCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    courseCardDark: {
        backgroundColor: '#020617',
    },
    cardThumbnail: {
        height: 120,
        backgroundColor: '#4f46e5',
        overflow: 'hidden',
    },
    cardThumbnailOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15,118,110,0.65)',
    },
    levelBadge: {
        position: 'absolute',
        right: 12,
        top: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: 'rgba(74,222,128,0.4)',
        backgroundColor: 'rgba(22,163,74,0.2)',
    },
    levelBadgeText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#bbf7d0',
    },
    cardBody: {
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
        color: '#111827',
    },
    courseTitleDark: {
        color: '#f9fafb',
    },
    courseDescription: {
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 12,
    },
    courseDescriptionDark: {
        color: '#9ca3af',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    progressLabel: {
        fontSize: 12,
        color: '#6b7280',
    },
    progressPercent: {
        fontSize: 12,
        fontWeight: '600',
        color: '#10b981',
    },
    progressBar: {
        height: 6,
        backgroundColor: '#e5e7eb',
        borderRadius: 999,
        overflow: 'hidden',
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#10b981',
    },
    lessonCount: {
        fontSize: 12,
        color: '#6b7280',
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    metaText: {
        fontSize: 12,
        color: '#6b7280',
    },
    metaDot: {
        fontSize: 12,
        color: '#9ca3af',
        marginHorizontal: 4,
    },
    metaTextDark: {
        color: '#9ca3af',
    },
    metaDotDark: {
        color: '#6b7280',
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#e5e7eb',
    },
    instructorAvatar: {
        width: 24,
        height: 24,
        borderRadius: 999,
        backgroundColor: '#e5e7eb',
        marginRight: 8,
    },
    instructorText: {
        fontSize: 12,
        color: '#6b7280',
    },
    primaryPill: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: '#10b981',
    },
    primaryPillText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#ecfdf5',
    },
    progressLabelDark: {
        color: '#9ca3af',
    },
    progressBarDark: {
        backgroundColor: '#1f2937',
    },
    progressFillDark: {
        backgroundColor: '#22c55e',
    },
    instructorTextDark: {
        color: '#9ca3af',
    },
});
