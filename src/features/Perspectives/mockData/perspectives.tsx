import perspectivesData from './perspectives.json';
import type { EvidenceStatItem, OverviewDetailItem, OverviewLeader, Comment, Activity } from '@/@types/types';
import type { DocumentRow } from '@/features/Perspectives/components/SummarySection/Evidence/DocumentTable';

// Helper function to convert JSON content to JSX
const convertContentToJSX = (item: any): string | React.ReactNode => {
  if (item.contentType === 'string') {
    return item.content;
  }
  
  if (item.contentType === 'jsx' && item.content) {
    const { type, children } = item.content;
    
    if (type === 'fragment' && children) {
      return (
        <>
          {children.map((child: any, index: number) => {
            if (child.type === 'p') {
              return <p key={index}>{child.text}</p>;
            }
            if (child.type === 'ul') {
              return (
                <ul key={index} className={child.className}>
                  {child.items.map((listItem: string, itemIndex: number) => (
                    <li key={itemIndex}>{listItem}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </>
      );
    }
  }
  
  return item.content || '';
};

export const evidenceStatsMockData: EvidenceStatItem[] = perspectivesData.evidenceStatsMockData;

export const overviewDetailItems: OverviewDetailItem[] = perspectivesData.overviewDetailItems.map((item: any) => ({
  label: item.label,
  content: convertContentToJSX(item),
}));

export const overviewLeaders: OverviewLeader[] = perspectivesData.overviewLeaders;
export const documentTableData: DocumentRow[] = perspectivesData.documentTableData as DocumentRow[];
export const commentsData: Comment[] = perspectivesData.commentsData;
export const activitiesData: Activity[] = perspectivesData.activitiesData;

