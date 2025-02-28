"use client"

import { Job, UserSkills } from '@/lib/types';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div 
      className="bg-card rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <Badge 
          variant="outline" 
          className={cn(
            "text-white",
            job.matchScore >= 80 ? "bg-green-500 hover:bg-green-600" : 
            job.matchScore >= 50 ? "bg-yellow-500 hover:bg-yellow-600" : 
            "bg-red-500 hover:bg-red-600"
          )}
        >
          {job.matchScore}% Match
        </Badge>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-muted-foreground">
          <Building2 className="h-4 w-4 mr-2" />
          <span>{job.company}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{job.location}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <DollarSign className="h-4 w-4 mr-2" />
          <span>{job.salary}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Match Score</span>
          <span className="text-sm font-medium">{job.matchScore}%</span>
        </div>
        <Progress 
          value={job.matchScore} 
          indicatorColor={getMatchScoreColor(job.matchScore)}
          className="h-2"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {job.requiredSkills.slice(0, 3).map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {job.requiredSkills.length > 3 && (
          <Badge variant="outline" className="text-xs">
            +{job.requiredSkills.length - 3} more
          </Badge>
        )}
      </div>
      
      <Button variant="ghost" size="sm" className="w-full flex justify-between items-center">
        <span>View Details</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}